import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DefineIndexFieldCommandInput extends DefineIndexFieldRequest {
}
export interface DefineIndexFieldCommandOutput extends DefineIndexFieldResponse, __MetadataBearer {
}
/**
 * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineIndexFieldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DefineIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DefineIndexFieldCommand extends $Command<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DefineIndexFieldCommandInput;
    constructor(input: DefineIndexFieldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput>;
    private serialize;
    private deserialize;
}
