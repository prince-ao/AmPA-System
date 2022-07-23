create table animal (
  pet_id int not null auto_increment,
  shelter_id int not null,
  intake_date date,
  found_lat float,
  found_lng float,
  age_at_intake int,
  primary_breed varchar(30),
  furr_color varchar(30),
  eye_color varchar(30),
  altered varchar(3),
  constraint pk_pet primary key (pet_id)
);