import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateDataSourceRequest, CreateDataSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDataSourceCommandInput extends CreateDataSourceRequest {
}
export interface CreateDataSourceCommandOutput extends CreateDataSourceResponse, __MetadataBearer {
}
/**
 * <p>Creates a data source that you use to with an Amazon Kendra index. </p>
 *          <p>You specify a name, data source connector type and description for
 *       your data source. You also specify configuration information such as
 *       document metadata (author, source URI, and so on) and user context
 *       information.</p>
 *          <p>
 *             <code>CreateDataSource</code> is a synchronous operation. The
 *       operation returns 200 if the data source was successfully created.
 *       Otherwise, an exception is raised.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDataSourceCommand extends $Command<CreateDataSourceCommandInput, CreateDataSourceCommandOutput, KendraClientResolvedConfig> {
    readonly input: CreateDataSourceCommandInput;
    constructor(input: CreateDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataSourceCommandInput, CreateDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
