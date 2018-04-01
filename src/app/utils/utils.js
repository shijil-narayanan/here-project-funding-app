
class Utils {
   getDateDiffrence(endDateTS){
     let currentDate = new Date(Date.now()),
        endDate = new Date(Number(endDateTS)),
        timeDiff = Math.abs(endDate - currentDate);
        return  Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
}
export default new Utils();