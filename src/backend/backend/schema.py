# File: ./backend/backend/schema.py

import graphene

import play_app.schema

class Queries(
	play_app.schema.Query,
	graphene.ObjectType
):
	dummy = graphene.String()


class Mutations(
	play_app.schema.Mutation,
	graphene.ObjectType
):
	pass



schema = graphene.Schema(query=Queries, mutation=Mutations)



