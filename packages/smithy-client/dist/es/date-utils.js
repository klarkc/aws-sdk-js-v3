/**
 * Builds a proper UTC HttpDate timestamp from a Date object
 * since not all environments will have this as the expected
 * format.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
 * > Prior to ECMAScript 2018, the format of the return value
 * > varied according to the platform. The most common return
 * > value was an RFC-1123 formatted date stamp, which is a
 * > slightly updated version of RFC-822 date stamps.
 */
// Build indexes outside so we allocate them once.
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// prettier-ignore
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function dateToUtcString(date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth();
    var dayOfWeek = date.getUTCDay();
    var dayOfMonthInt = date.getUTCDate();
    var hoursInt = date.getUTCHours();
    var minutesInt = date.getUTCMinutes();
    var secondsInt = date.getUTCSeconds();
    // Build 0 prefixed strings for contents that need to be
    // two digits and where we get an integer back.
    var dayOfMonthString = dayOfMonthInt < 10 ? "0" + dayOfMonthInt : "" + dayOfMonthInt;
    var hoursString = hoursInt < 10 ? "0" + hoursInt : "" + hoursInt;
    var minutesString = minutesInt < 10 ? "0" + minutesInt : "" + minutesInt;
    var secondsString = secondsInt < 10 ? "0" + secondsInt : "" + secondsInt;
    return days[dayOfWeek] + ", " + dayOfMonthString + " " + months[month] + " " + year + " " + hoursString + ":" + minutesString + ":" + secondsString + " GMT";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFFSCxrREFBa0Q7QUFDbEQsSUFBTSxJQUFJLEdBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUUsa0JBQWtCO0FBQ2xCLElBQU0sTUFBTSxHQUFrQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFbkgsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFVO0lBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV4Qyx3REFBd0Q7SUFDeEQsK0NBQStDO0lBQy9DLElBQU0sZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxhQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUcsYUFBZSxDQUFDO0lBQ3ZGLElBQU0sV0FBVyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksUUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFHLFFBQVUsQ0FBQztJQUNuRSxJQUFNLGFBQWEsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLFVBQVksQ0FBQyxDQUFDLENBQUMsS0FBRyxVQUFZLENBQUM7SUFDM0UsSUFBTSxhQUFhLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxVQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUcsVUFBWSxDQUFDO0lBRTNFLE9BQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFLLGdCQUFnQixTQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBSSxJQUFJLFNBQUksV0FBVyxTQUFJLGFBQWEsU0FBSSxhQUFhLFNBQU0sQ0FBQztBQUNqSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCdWlsZHMgYSBwcm9wZXIgVVRDIEh0dHBEYXRlIHRpbWVzdGFtcCBmcm9tIGEgRGF0ZSBvYmplY3RcbiAqIHNpbmNlIG5vdCBhbGwgZW52aXJvbm1lbnRzIHdpbGwgaGF2ZSB0aGlzIGFzIHRoZSBleHBlY3RlZFxuICogZm9ybWF0LlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZS90b1VUQ1N0cmluZ1xuICogPiBQcmlvciB0byBFQ01BU2NyaXB0IDIwMTgsIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZVxuICogPiB2YXJpZWQgYWNjb3JkaW5nIHRvIHRoZSBwbGF0Zm9ybS4gVGhlIG1vc3QgY29tbW9uIHJldHVyblxuICogPiB2YWx1ZSB3YXMgYW4gUkZDLTExMjMgZm9ybWF0dGVkIGRhdGUgc3RhbXAsIHdoaWNoIGlzIGFcbiAqID4gc2xpZ2h0bHkgdXBkYXRlZCB2ZXJzaW9uIG9mIFJGQy04MjIgZGF0ZSBzdGFtcHMuXG4gKi9cblxuLy8gQnVpbGQgaW5kZXhlcyBvdXRzaWRlIHNvIHdlIGFsbG9jYXRlIHRoZW0gb25jZS5cbmNvbnN0IGRheXM6IEFycmF5PFN0cmluZz4gPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IG1vbnRoczogQXJyYXk8U3RyaW5nPiA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1V0Y1N0cmluZyhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIGNvbnN0IGRheU9mTW9udGhJbnQgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgY29uc3QgaG91cnNJbnQgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZXNJbnQgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgY29uc3Qgc2Vjb25kc0ludCA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xuXG4gIC8vIEJ1aWxkIDAgcHJlZml4ZWQgc3RyaW5ncyBmb3IgY29udGVudHMgdGhhdCBuZWVkIHRvIGJlXG4gIC8vIHR3byBkaWdpdHMgYW5kIHdoZXJlIHdlIGdldCBhbiBpbnRlZ2VyIGJhY2suXG4gIGNvbnN0IGRheU9mTW9udGhTdHJpbmcgPSBkYXlPZk1vbnRoSW50IDwgMTAgPyBgMCR7ZGF5T2ZNb250aEludH1gIDogYCR7ZGF5T2ZNb250aEludH1gO1xuICBjb25zdCBob3Vyc1N0cmluZyA9IGhvdXJzSW50IDwgMTAgPyBgMCR7aG91cnNJbnR9YCA6IGAke2hvdXJzSW50fWA7XG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBtaW51dGVzSW50IDwgMTAgPyBgMCR7bWludXRlc0ludH1gIDogYCR7bWludXRlc0ludH1gO1xuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gc2Vjb25kc0ludCA8IDEwID8gYDAke3NlY29uZHNJbnR9YCA6IGAke3NlY29uZHNJbnR9YDtcblxuICByZXR1cm4gYCR7ZGF5c1tkYXlPZldlZWtdfSwgJHtkYXlPZk1vbnRoU3RyaW5nfSAke21vbnRoc1ttb250aF19ICR7eWVhcn0gJHtob3Vyc1N0cmluZ306JHttaW51dGVzU3RyaW5nfToke3NlY29uZHNTdHJpbmd9IEdNVGA7XG59XG4iXX0=