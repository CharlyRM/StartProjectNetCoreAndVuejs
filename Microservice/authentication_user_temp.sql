/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
 */

-- Table: public.authentication_user_temp

-- DROP TABLE public.authentication_user_temp;

CREATE TABLE IF NOT EXISTS public.authentication_user_temp
(
  id_user serial NOT NULL,
  name character varying(100) NOT NULL,
  email character varying(50) NOT NULL, 
  password text NOT NULL,
  single_code text,
  email_confirmed character varying(1) DEFAULT 'N' NOT NULL,
  expiration_time timestamp without time zone default now() + INTERVAL '2 hour',
  password_recovery character varying(1) DEFAULT 'N' NOT NULL,
  CONSTRAINT authentication_user_temp_pkey PRIMARY KEY (id_user)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.authentication_user_temp
  OWNER TO postgres;