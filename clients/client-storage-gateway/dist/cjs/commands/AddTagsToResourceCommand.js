"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagsToResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds one or more tags to the specified resource. You use tags to add metadata to
 *          resources, which you can use to categorize these resources. For example, you can categorize
 *          resources by purpose, owner, environment, or team. Each tag consists of a key and a value,
 *          which you define. You can add tags to the following AWS Storage Gateway resources:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Storage gateways of all types</p>
 *             </li>
 *             <li>
 *                <p>Storage volumes</p>
 *             </li>
 *             <li>
 *                <p>Virtual tapes</p>
 *             </li>
 *             <li>
 *                <p>NFS and SMB file shares</p>
 *             </li>
 *          </ul>
 *
 *          <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
 *          that are recovered to a new gateway maintain their tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddTagsToResourceCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddTagsToResourceCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddTagsToResourceCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "StorageGatewayClient";
        const commandName = "AddTagsToResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddTagsToResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddTagsToResourceOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddTagsToResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddTagsToResourceCommand(output, context);
    }
}
exports.AddTagsToResourceCommand = AddTagsToResourceCommand;
//# sourceMappingURL=AddTagsToResourceCommand.js.map