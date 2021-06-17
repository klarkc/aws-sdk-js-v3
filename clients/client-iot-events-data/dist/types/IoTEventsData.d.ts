import { IoTEventsDataClient } from "./IoTEventsDataClient";
import { BatchAcknowledgeAlarmCommandInput, BatchAcknowledgeAlarmCommandOutput } from "./commands/BatchAcknowledgeAlarmCommand";
import { BatchDisableAlarmCommandInput, BatchDisableAlarmCommandOutput } from "./commands/BatchDisableAlarmCommand";
import { BatchEnableAlarmCommandInput, BatchEnableAlarmCommandOutput } from "./commands/BatchEnableAlarmCommand";
import { BatchPutMessageCommandInput, BatchPutMessageCommandOutput } from "./commands/BatchPutMessageCommand";
import { BatchResetAlarmCommandInput, BatchResetAlarmCommandOutput } from "./commands/BatchResetAlarmCommand";
import { BatchSnoozeAlarmCommandInput, BatchSnoozeAlarmCommandOutput } from "./commands/BatchSnoozeAlarmCommand";
import { BatchUpdateDetectorCommandInput, BatchUpdateDetectorCommandOutput } from "./commands/BatchUpdateDetectorCommand";
import { DescribeAlarmCommandInput, DescribeAlarmCommandOutput } from "./commands/DescribeAlarmCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "./commands/DescribeDetectorCommand";
import { ListAlarmsCommandInput, ListAlarmsCommandOutput } from "./commands/ListAlarmsCommand";
import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "./commands/ListDetectorsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use AWS IoT Events Data API commands to send inputs to
 *       detectors, list detectors, and view or update a detector's status.</p>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is AWS IoT Events?</a> in the
 *         <i>AWS IoT Events Developer Guide</i>.</p>
 */
export declare class IoTEventsData extends IoTEventsDataClient {
    /**
     * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
     *       after you acknowledge them.</p>
     */
    batchAcknowledgeAlarm(args: BatchAcknowledgeAlarmCommandInput, options?: __HttpHandlerOptions): Promise<BatchAcknowledgeAlarmCommandOutput>;
    batchAcknowledgeAlarm(args: BatchAcknowledgeAlarmCommandInput, cb: (err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void): void;
    batchAcknowledgeAlarm(args: BatchAcknowledgeAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void): void;
    /**
     * <p>Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after
     *       you disable them.</p>
     */
    batchDisableAlarm(args: BatchDisableAlarmCommandInput, options?: __HttpHandlerOptions): Promise<BatchDisableAlarmCommandOutput>;
    batchDisableAlarm(args: BatchDisableAlarmCommandInput, cb: (err: any, data?: BatchDisableAlarmCommandOutput) => void): void;
    batchDisableAlarm(args: BatchDisableAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDisableAlarmCommandOutput) => void): void;
    /**
     * <p>Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you
     *       enable them.</p>
     */
    batchEnableAlarm(args: BatchEnableAlarmCommandInput, options?: __HttpHandlerOptions): Promise<BatchEnableAlarmCommandOutput>;
    batchEnableAlarm(args: BatchEnableAlarmCommandInput, cb: (err: any, data?: BatchEnableAlarmCommandOutput) => void): void;
    batchEnableAlarm(args: BatchEnableAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchEnableAlarmCommandOutput) => void): void;
    /**
     * <p>Sends a set of messages to the AWS IoT Events system. Each message payload is transformed into
     *       the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor
     *       that input. If multiple messages are sent, the order in which the messages are processed isn't
     *       guaranteed. To guarantee ordering, you must send messages one at a time and wait for a
     *       successful response.</p>
     */
    batchPutMessage(args: BatchPutMessageCommandInput, options?: __HttpHandlerOptions): Promise<BatchPutMessageCommandOutput>;
    batchPutMessage(args: BatchPutMessageCommandInput, cb: (err: any, data?: BatchPutMessageCommandOutput) => void): void;
    batchPutMessage(args: BatchPutMessageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchPutMessageCommandOutput) => void): void;
    /**
     * <p>Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you
     *       reset them.</p>
     */
    batchResetAlarm(args: BatchResetAlarmCommandInput, options?: __HttpHandlerOptions): Promise<BatchResetAlarmCommandOutput>;
    batchResetAlarm(args: BatchResetAlarmCommandInput, cb: (err: any, data?: BatchResetAlarmCommandOutput) => void): void;
    batchResetAlarm(args: BatchResetAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchResetAlarmCommandOutput) => void): void;
    /**
     * <p>Changes one or more alarms to the snooze mode. The alarms change to the
     *         <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.</p>
     */
    batchSnoozeAlarm(args: BatchSnoozeAlarmCommandInput, options?: __HttpHandlerOptions): Promise<BatchSnoozeAlarmCommandOutput>;
    batchSnoozeAlarm(args: BatchSnoozeAlarmCommandInput, cb: (err: any, data?: BatchSnoozeAlarmCommandOutput) => void): void;
    batchSnoozeAlarm(args: BatchSnoozeAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchSnoozeAlarmCommandOutput) => void): void;
    /**
     * <p>Updates the state, variable values, and timer settings of one or more detectors
     *       (instances) of a specified detector model.</p>
     */
    batchUpdateDetector(args: BatchUpdateDetectorCommandInput, options?: __HttpHandlerOptions): Promise<BatchUpdateDetectorCommandOutput>;
    batchUpdateDetector(args: BatchUpdateDetectorCommandInput, cb: (err: any, data?: BatchUpdateDetectorCommandOutput) => void): void;
    batchUpdateDetector(args: BatchUpdateDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchUpdateDetectorCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an alarm.</p>
     */
    describeAlarm(args: DescribeAlarmCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAlarmCommandOutput>;
    describeAlarm(args: DescribeAlarmCommandInput, cb: (err: any, data?: DescribeAlarmCommandOutput) => void): void;
    describeAlarm(args: DescribeAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAlarmCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified detector (instance).</p>
     */
    describeDetector(args: DescribeDetectorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDetectorCommandOutput>;
    describeDetector(args: DescribeDetectorCommandInput, cb: (err: any, data?: DescribeDetectorCommandOutput) => void): void;
    describeDetector(args: DescribeDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDetectorCommandOutput) => void): void;
    /**
     * <p>Lists one or more alarms. The operation returns only the metadata associated with each
     *       alarm.</p>
     */
    listAlarms(args: ListAlarmsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlarmsCommandOutput>;
    listAlarms(args: ListAlarmsCommandInput, cb: (err: any, data?: ListAlarmsCommandOutput) => void): void;
    listAlarms(args: ListAlarmsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAlarmsCommandOutput) => void): void;
    /**
     * <p>Lists detectors (the instances of a detector model).</p>
     */
    listDetectors(args: ListDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<ListDetectorsCommandOutput>;
    listDetectors(args: ListDetectorsCommandInput, cb: (err: any, data?: ListDetectorsCommandOutput) => void): void;
    listDetectors(args: ListDetectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDetectorsCommandOutput) => void): void;
}
