import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSchemaRequest, DescribeSchemaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSchemaCommandInput extends DescribeSchemaRequest {
}
export interface DescribeSchemaCommandOutput extends DescribeSchemaResponse, __MetadataBearer {
}
/**
 * <p>Describes a schema. For more information on schemas, see
 *       <a>CreateSchema</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSchemaCommandInput} for command's `input` shape.
 * @see {@link DescribeSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSchemaCommand extends $Command<DescribeSchemaCommandInput, DescribeSchemaCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeSchemaCommandInput;
    constructor(input: DescribeSchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSchemaCommandInput, DescribeSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
