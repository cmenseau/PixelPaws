CREATE TABLE public.pets
(
    id bigint,
    name character varying,
    type character varying,
    colour character varying,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.pets
    OWNER to postgres;

CREATE SEQUENCE public.pets_id_sequence
    INCREMENT 1
    START 0
    MINVALUE 0;

ALTER SEQUENCE public.pets_id_sequence
    OWNED BY public.pets.id;

ALTER SEQUENCE public.pets_id_sequence
    OWNER TO postgres;

ALTER TABLE IF EXISTS public.pets
    ALTER COLUMN id SET DEFAULT nextval('pets_id_sequence'::regclass);

INSERT INTO public.pets(
	name, type, colour)
	VALUES 
		('Beethoven', 'dog', 'brown'),
		('Hachiko', 'dog', 'white'),
		('Snoopy', 'dog', 'white'),
		('Garfield', 'cat', 'orange'),
		('Hello Kitty', 'dog', 'white')
	;

SELECT * from pets;


ALTER TABLE IF EXISTS public.pets
    ADD COLUMN userid bigint NOT NULL DEFAULT 1;

ALTER TABLE IF EXISTS public.pets
    ALTER COLUMN userid DROP DEFAULT;

ALTER TABLE IF EXISTS public.pets
    ADD FOREIGN KEY (userid)
    REFERENCES public.users (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    NOT VALID;