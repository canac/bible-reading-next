import JourneyDay from './JourneyDay';
import { useLoadJourneyQuery } from '../generated/graphql';

type Props = {
  id: number;
};

export default function Journey(props: Props): JSX.Element | null {
  const [journeyResult] = useLoadJourneyQuery({
    variables: { plan_journey_id: props.id },
  });

  const days = journeyResult?.data?.plan_journey?.plan_journey_days;

  return (
    <>
      {days &&
        days.map((day) => (
          <JourneyDay key={day.plan_journey_day_id} day={day} />
        ))}
    </>
  );
}
