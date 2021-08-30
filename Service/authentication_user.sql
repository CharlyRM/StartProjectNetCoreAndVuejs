/*
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
 */

-- Table: public.authentication_user

-- DROP TABLE public.authentication_user;

CREATE TABLE IF NOT EXISTS public.authentication_user
(
  id_user bigint NOT NULL,
  name character varying(100) NOT NULL,
  email character varying(50) NOT NULL, 
  password text NOT NULL,
  avatar text,
  status integer DEFAULT 1 NOT NULL, -- 1 = Active, 0 = Blocked
  first_access character varying(1) DEFAULT 'N' NOT NULL, -- 1 = first access
  administrator character varying(1) DEFAULT 'N' NOT NULL, -- 1 = administrator
  date_register timestamp without time zone default now(),
  CONSTRAINT authentication_user_pkey PRIMARY KEY (id_user)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.authentication_user
  OWNER TO postgres;
  
  
  ----- SEQUENCE -----
  
CREATE SEQUENCE authentication_user_id_seq;  
    