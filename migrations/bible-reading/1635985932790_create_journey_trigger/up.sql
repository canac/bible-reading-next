CREATE FUNCTION public.create_journey_days() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    BEGIN
    INSERT INTO plan_journey_day (plan_journey_id, plan_day_id, completed, completed_date) SELECT NEW.plan_journey_id, plan_day_id, false, null FROM plan_day;
    RETURN NEW;
    END;
    $$;
CREATE TRIGGER trigger_create_journey_days AFTER INSERT ON public.plan_journey FOR EACH ROW EXECUTE FUNCTION public.create_journey_days();
