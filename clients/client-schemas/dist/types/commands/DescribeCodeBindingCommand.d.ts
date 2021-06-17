import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { DescribeCodeBindingRequest, DescribeCodeBindingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCodeBindingCommandInput extends DescribeCodeBindingRequest {
}
export interface DescribeCodeBindingCommandOutput extends DescribeCodeBindingResponse, __MetadataBearer {
}
/**
 * <p>Describe the code binding URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeCodeBindingCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeCodeBindingCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DescribeCodeBindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeBindingCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeBindingCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCodeBindingCommand extends $Command<DescribeCodeBindingCommandInput, DescribeCodeBindingCommandOutput, SchemasClientResolvedConfig> {
    readonly input: DescribeCodeBindingCommandInput;
    constructor(input: DescribeCodeBindingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCodeBindingCommandInput, DescribeCodeBindingCommandOutput>;
    private serialize;
    private deserialize;
}
