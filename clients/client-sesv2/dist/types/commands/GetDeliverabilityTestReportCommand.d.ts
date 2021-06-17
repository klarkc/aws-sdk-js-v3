import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetDeliverabilityTestReportRequest, GetDeliverabilityTestReportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeliverabilityTestReportCommandInput extends GetDeliverabilityTestReportRequest {
}
export interface GetDeliverabilityTestReportCommandOutput extends GetDeliverabilityTestReportResponse, __MetadataBearer {
}
/**
 * <p>Retrieve the results of a predictive inbox placement test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDeliverabilityTestReportCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDeliverabilityTestReportCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link GetDeliverabilityTestReportCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeliverabilityTestReportCommand extends $Command<GetDeliverabilityTestReportCommandInput, GetDeliverabilityTestReportCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: GetDeliverabilityTestReportCommandInput;
    constructor(input: GetDeliverabilityTestReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeliverabilityTestReportCommandInput, GetDeliverabilityTestReportCommandOutput>;
    private serialize;
    private deserialize;
}
