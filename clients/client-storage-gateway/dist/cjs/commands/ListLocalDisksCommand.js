"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLocalDisksCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
 *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
 *
 *          <p>The request returns a list of all disks, specifying which are configured as working
 *          storage, cache storage, or stored volume or not configured at all. The response includes a
 *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
 *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
 *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
 *          corrupted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListLocalDisksCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListLocalDisksCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListLocalDisksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLocalDisksCommandInput} for command's `input` shape.
 * @see {@link ListLocalDisksCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListLocalDisksCommand extends smithy_client_1.Command {
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
        const commandName = "ListLocalDisksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListLocalDisksInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListLocalDisksOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListLocalDisksCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListLocalDisksCommand(output, context);
    }
}
exports.ListLocalDisksCommand = ListLocalDisksCommand;
//# sourceMappingURL=ListLocalDisksCommand.js.map