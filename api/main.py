from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


@app.get("/")
async def root():
    return "Welcome to SHOR-DI!"
