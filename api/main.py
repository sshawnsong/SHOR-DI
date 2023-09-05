from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Union
import ctypes

dijkstra_lib = ctypes.CDLL('./dijkstra.so')

class ShorDi(BaseModel):
    nodes: List[Union[int, int]]


app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", response_model=ShorDi)
async def root(begin: int, end: int):
    result_size = ctypes.c_int()
    result = (ctypes.c_int * 2)()

    dijkstra_lib.calculateShorDi(begin, end, result, ctypes.byref(result_size))

    result_list = [result[i] for i in range(result_size.value)]

    return ShorDi(nodes=result_list)
