CREATE DATABASE jisc_demo;

CREATE TABLE url_routes (
    route_id SERIAL PRIMARY KEY,
    original_route varchar(255),
    new_route varchar(255),
    sitename varchar(255),
    site_key varchar(255)
);