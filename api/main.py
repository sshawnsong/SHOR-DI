from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Union


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
    return ShorDi(nodes=[begin, end])
