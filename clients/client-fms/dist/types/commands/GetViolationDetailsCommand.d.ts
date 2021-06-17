import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetViolationDetailsRequest, GetViolationDetailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetViolationDetailsCommandInput extends GetViolationDetailsRequest {
}
export interface GetViolationDetailsCommandOutput extends GetViolationDetailsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves violations for a resource based on the specified AWS Firewall Manager policy and AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetViolationDetailsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetViolationDetailsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetViolationDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetViolationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetViolationDetailsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetViolationDetailsCommand extends $Command<GetViolationDetailsCommandInput, GetViolationDetailsCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetViolationDetailsCommandInput;
    constructor(input: GetViolationDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetViolationDetailsCommandInput, GetViolationDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
