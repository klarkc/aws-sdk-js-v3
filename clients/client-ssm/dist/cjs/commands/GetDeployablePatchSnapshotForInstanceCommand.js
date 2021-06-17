"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeployablePatchSnapshotForInstanceCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is
 *    primarily used by the AWS-RunPatchBaseline Systems Manager document. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDeployablePatchSnapshotForInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetDeployablePatchSnapshotForInstanceCommand extends smithy_client_1.Command {
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
        const clientName = "SSMClient";
        const commandName = "GetDeployablePatchSnapshotForInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.GetDeployablePatchSnapshotForInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.GetDeployablePatchSnapshotForInstanceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(output, context);
    }
}
exports.GetDeployablePatchSnapshotForInstanceCommand = GetDeployablePatchSnapshotForInstanceCommand;
//# sourceMappingURL=GetDeployablePatchSnapshotForInstanceCommand.js.map