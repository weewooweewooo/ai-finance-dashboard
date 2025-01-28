from sqlalchemy import create_engine
from models import Base

engine = create_engine("postgresql://postgres:123@localhost:5432/budgetdb")
Base.metadata.create_all(bind=engine)