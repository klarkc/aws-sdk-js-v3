import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeRoutingProfileRequest, DescribeRoutingProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRoutingProfileCommandInput extends DescribeRoutingProfileRequest {
}
export interface DescribeRoutingProfileCommandOutput extends DescribeRoutingProfileResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeRoutingProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRoutingProfileCommand extends $Command<DescribeRoutingProfileCommandInput, DescribeRoutingProfileCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DescribeRoutingProfileCommandInput;
    constructor(input: DescribeRoutingProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRoutingProfileCommandInput, DescribeRoutingProfileCommandOutput>;
    private serialize;
    private deserialize;
}
