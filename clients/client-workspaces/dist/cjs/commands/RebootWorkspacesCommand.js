"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebootWorkspacesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Reboots the specified WorkSpaces.</p>
 *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or
 *             <code>UNHEALTHY</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebootWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebootWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RebootWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebootWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RebootWorkspacesCommand extends smithy_client_1.Command {
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
        const clientName = "WorkSpacesClient";
        const commandName = "RebootWorkspacesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RebootWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RebootWorkspacesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RebootWorkspacesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RebootWorkspacesCommand(output, context);
    }
}
exports.RebootWorkspacesCommand = RebootWorkspacesCommand;
//# sourceMappingURL=RebootWorkspacesCommand.js.map