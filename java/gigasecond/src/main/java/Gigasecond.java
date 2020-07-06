import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {

    Long GIGASECOND = 1000000000L;
    LocalDateTime gigMoment;

    Gigasecond(LocalDate moment) {
        gigMoment = moment.atStartOfDay();
    }

    Gigasecond(LocalDateTime moment) {
        gigMoment = moment;
    }

    LocalDateTime getDateTime() {
        return gigMoment.plusSeconds(GIGASECOND);
    }
}
