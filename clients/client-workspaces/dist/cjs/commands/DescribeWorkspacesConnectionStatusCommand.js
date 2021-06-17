"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeWorkspacesConnectionStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the connection status of the specified WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspacesConnectionStatusCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspacesConnectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspacesConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspacesConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeWorkspacesConnectionStatusCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeWorkspacesConnectionStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeWorkspacesConnectionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeWorkspacesConnectionStatusResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(output, context);
    }
}
exports.DescribeWorkspacesConnectionStatusCommand = DescribeWorkspacesConnectionStatusCommand;
//# sourceMappingURL=DescribeWorkspacesConnectionStatusCommand.js.map