import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeHoursOfOperationRequest, DescribeHoursOfOperationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHoursOfOperationCommandInput extends DescribeHoursOfOperationRequest {
}
export interface DescribeHoursOfOperationCommandOutput extends DescribeHoursOfOperationResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the hours of operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHoursOfOperationCommand extends $Command<DescribeHoursOfOperationCommandInput, DescribeHoursOfOperationCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DescribeHoursOfOperationCommandInput;
    constructor(input: DescribeHoursOfOperationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHoursOfOperationCommandInput, DescribeHoursOfOperationCommandOutput>;
    private serialize;
    private deserialize;
}
