SET check_function_bodies = false;
CREATE TABLE public.plan (
    plan_id integer NOT NULL,
    name character varying NOT NULL
);
CREATE TABLE public.plan_day (
    plan_day_id integer NOT NULL,
    plan_id integer NOT NULL,
    day integer NOT NULL
);
CREATE TABLE public.plan_day_passage (
    plan_day_passage_id integer NOT NULL,
    plan_day_id integer NOT NULL,
    passage character varying NOT NULL
);
CREATE SEQUENCE public.plan_day_passage_plan_day_passage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.plan_day_passage_plan_day_passage_id_seq OWNED BY public.plan_day_passage.plan_day_passage_id;
CREATE SEQUENCE public.plan_day_plan_day_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.plan_day_plan_day_id_seq OWNED BY public.plan_day.plan_day_id;
CREATE TABLE public.plan_journey (
    plan_journey_id integer NOT NULL,
    plan_id integer NOT NULL
);
CREATE TABLE public.plan_journey_day (
    plan_journey_day_id integer NOT NULL,
    plan_journey_id integer NOT NULL,
    plan_day_id integer NOT NULL,
    completed boolean NOT NULL,
    completed_date timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.plan_journey_day_plan_journey_day_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.plan_journey_day_plan_journey_day_id_seq OWNED BY public.plan_journey_day.plan_journey_day_id;
CREATE SEQUENCE public.plan_journey_plan_journey_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.plan_journey_plan_journey_id_seq OWNED BY public.plan_journey.plan_journey_id;
CREATE SEQUENCE public.plan_plan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.plan_plan_id_seq OWNED BY public.plan.plan_id;
ALTER TABLE ONLY public.plan ALTER COLUMN plan_id SET DEFAULT nextval('public.plan_plan_id_seq'::regclass);
ALTER TABLE ONLY public.plan_day ALTER COLUMN plan_day_id SET DEFAULT nextval('public.plan_day_plan_day_id_seq'::regclass);
ALTER TABLE ONLY public.plan_day_passage ALTER COLUMN plan_day_passage_id SET DEFAULT nextval('public.plan_day_passage_plan_day_passage_id_seq'::regclass);
ALTER TABLE ONLY public.plan_journey ALTER COLUMN plan_journey_id SET DEFAULT nextval('public.plan_journey_plan_journey_id_seq'::regclass);
ALTER TABLE ONLY public.plan_journey_day ALTER COLUMN plan_journey_day_id SET DEFAULT nextval('public.plan_journey_day_plan_journey_day_id_seq'::regclass);
ALTER TABLE ONLY public.plan_day_passage
    ADD CONSTRAINT plan_day_passage_pkey PRIMARY KEY (plan_day_passage_id);
ALTER TABLE ONLY public.plan_day
    ADD CONSTRAINT plan_day_pkey PRIMARY KEY (plan_day_id);
ALTER TABLE ONLY public.plan_journey_day
    ADD CONSTRAINT plan_journey_day_pkey PRIMARY KEY (plan_journey_day_id);
ALTER TABLE ONLY public.plan_journey
    ADD CONSTRAINT plan_journey_pkey PRIMARY KEY (plan_journey_id);
ALTER TABLE ONLY public.plan
    ADD CONSTRAINT plan_pkey PRIMARY KEY (plan_id);
ALTER TABLE ONLY public.plan_day_passage
    ADD CONSTRAINT plan_day_passage_plan_day_id_fkey FOREIGN KEY (plan_day_id) REFERENCES public.plan_day(plan_day_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.plan_day
    ADD CONSTRAINT plan_day_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.plan(plan_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.plan_journey_day
    ADD CONSTRAINT plan_journey_day_plan_day_id_fkey FOREIGN KEY (plan_day_id) REFERENCES public.plan_day(plan_day_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.plan_journey_day
    ADD CONSTRAINT plan_journey_day_plan_journey_id_fkey FOREIGN KEY (plan_journey_id) REFERENCES public.plan_journey(plan_journey_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.plan_journey
    ADD CONSTRAINT plan_journey_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.plan(plan_id) ON UPDATE CASCADE ON DELETE CASCADE;
