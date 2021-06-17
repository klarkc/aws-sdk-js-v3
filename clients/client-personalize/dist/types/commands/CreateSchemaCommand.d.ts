import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSchemaCommandInput extends CreateSchemaRequest {
}
export interface CreateSchemaCommandOutput extends CreateSchemaResponse, __MetadataBearer {
}
/**
 * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create
 *       must be in Avro JSON format.</p>
 *          <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset
 *       type and has a set of required field and keywords.
 *       You specify a schema when you call <a>CreateDataset</a>.</p>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSchemas</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSchema</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSchema</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSchemaCommand extends $Command<CreateSchemaCommandInput, CreateSchemaCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateSchemaCommandInput;
    constructor(input: CreateSchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSchemaCommandInput, CreateSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
