"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTapesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf
 *          (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names
 *          (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both
 *          your VTL and VTS.</p>
 *
 *          <p>This operation supports pagination. By default, the operation returns a maximum of up to
 *          100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit
 *          the number of tapes in the response. If the number of tapes returned in the response is
 *          truncated, the response includes a <code>Marker</code> element that you can use in your
 *          subsequent request to retrieve the next set of tapes. This operation is only supported in
 *          the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListTapesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTapesCommandInput} for command's `input` shape.
 * @see {@link ListTapesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListTapesCommand extends smithy_client_1.Command {
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
        const commandName = "ListTapesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListTapesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListTapesOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListTapesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListTapesCommand(output, context);
    }
}
exports.ListTapesCommand = ListTapesCommand;
//# sourceMappingURL=ListTapesCommand.js.map