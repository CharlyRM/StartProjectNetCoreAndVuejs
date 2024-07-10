-- Table: public.authentication_user

-- DROP TABLE public.authentication_user;

CREATE TABLE IF NOT EXISTS public.authentication_user
(
  id_user serial NOT NULL,
  name character varying(100) NOT NULL,
  email character varying(50) NOT NULL, 
  password text NOT NULL,
  avatar text,
  status integer DEFAULT 1 NOT NULL, -- 1 = Active, 0 = Blocked
  first_access character varying(1) DEFAULT 'N' NOT NULL, -- first access
  administrator character varying(1) DEFAULT 'N' NOT NULL, -- administrator
  date_register timestamp without time zone default now(),
  CONSTRAINT authentication_user_pkey PRIMARY KEY (id_user)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.authentication_user
  OWNER TO postgres;
  
  

INSERT INTO authentication_user(
            name, email, password, avatar, status, first_access, 
            administrator)
    VALUES ('USER MASTER', 
	        'test@gmail.com', 
			'fcea920f7412b5da7be0cf42b8c93759', 
			'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 
			1, 
			'N', 
            'S');



    