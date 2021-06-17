import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCalendarStateCommandInput extends GetCalendarStateRequest {
}
export interface GetCalendarStateCommandOutput extends GetCalendarStateResponse, __MetadataBearer {
}
/**
 * <p>Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you
 *    specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific
 *    time, and returns the next time that the Change Calendar state will transition. If you do not
 *    specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries
 *    have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p>
 *          <p>If you specify more than one calendar in a request, the command returns the status of
 *     <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the
 *    request are closed, the status returned is <code>CLOSED</code>.</p>
 *          <p>For more information about Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change
 *     Calendar</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCalendarStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCalendarStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetCalendarStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCalendarStateCommandInput} for command's `input` shape.
 * @see {@link GetCalendarStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCalendarStateCommand extends $Command<GetCalendarStateCommandInput, GetCalendarStateCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetCalendarStateCommandInput;
    constructor(input: GetCalendarStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCalendarStateCommandInput, GetCalendarStateCommandOutput>;
    private serialize;
    private deserialize;
}
