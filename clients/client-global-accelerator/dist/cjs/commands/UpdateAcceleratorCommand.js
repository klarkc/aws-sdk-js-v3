"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAcceleratorCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Update an accelerator. </p>
 *
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateAcceleratorCommand extends smithy_client_1.Command {
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
        const clientName = "GlobalAcceleratorClient";
        const commandName = "UpdateAcceleratorCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateAcceleratorResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateAcceleratorCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateAcceleratorCommand(output, context);
    }
}
exports.UpdateAcceleratorCommand = UpdateAcceleratorCommand;
//# sourceMappingURL=UpdateAcceleratorCommand.js.map