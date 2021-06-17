import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeServiceActionExecutionParametersInput, DescribeServiceActionExecutionParametersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeServiceActionExecutionParametersCommandInput extends DescribeServiceActionExecutionParametersInput {
}
export interface DescribeServiceActionExecutionParametersCommandOutput extends DescribeServiceActionExecutionParametersOutput, __MetadataBearer {
}
/**
 * <p>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeServiceActionExecutionParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceActionExecutionParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionExecutionParametersCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeServiceActionExecutionParametersCommand extends $Command<DescribeServiceActionExecutionParametersCommandInput, DescribeServiceActionExecutionParametersCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeServiceActionExecutionParametersCommandInput;
    constructor(input: DescribeServiceActionExecutionParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceActionExecutionParametersCommandInput, DescribeServiceActionExecutionParametersCommandOutput>;
    private serialize;
    private deserialize;
}
