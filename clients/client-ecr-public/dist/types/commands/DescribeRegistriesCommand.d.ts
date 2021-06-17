import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { DescribeRegistriesRequest, DescribeRegistriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRegistriesCommandInput extends DescribeRegistriesRequest {
}
export interface DescribeRegistriesCommandOutput extends DescribeRegistriesResponse, __MetadataBearer {
}
/**
 * <p>Returns details for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeRegistriesCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeRegistriesCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new DescribeRegistriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegistriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistriesCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRegistriesCommand extends $Command<DescribeRegistriesCommandInput, DescribeRegistriesCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: DescribeRegistriesCommandInput;
    constructor(input: DescribeRegistriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRegistriesCommandInput, DescribeRegistriesCommandOutput>;
    private serialize;
    private deserialize;
}
