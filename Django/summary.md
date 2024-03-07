 # Django

 ### Unique features of Django 

- ###### Object-Relational Mapping (ORM)
- ###### Built-in admin interface
- ###### Built-in Authentication and authorization
- ###### Template system
- ###### Scalability and flexibility
- ###### Community and ecosystem


### What to consider when choosing a framework?

- ###### Maturity
- ###### Difficulty
- ###### Stability
- ###### Community

### What to consider when choosing a framework?

> ..
A Django QuerySet is a collection of database objects. It is a lazy collection, meaning that the database is not queried until the QuerySet is evaluated. This allows you to chain together multiple operations on the QuerySet, such as filtering, ordering, and annotating, without actually hitting the database until you are ready.
..

#### What is .object attribute?
> ..
The .objects attribute on a Django model is a reference to the model's manager. A manager is a class that provides an interface for interacting with the database for a particular model. The default manager for all Django models is the Manager class, but you can also create custom managers for your own models.
..


#### The .objects supported methods for performing common database operations

- ###### all() 
- ###### get() - this return an object (not a query_set)
- ###### filter() - return a query_set
- ###### exclude()
- ###### create()
- ###### update()
- ###### delete()





