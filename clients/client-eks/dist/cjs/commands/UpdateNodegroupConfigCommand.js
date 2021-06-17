"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNodegroupConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates an Amazon EKS managed node group configuration. Your node group continues to
 *             function during the update. The response output includes an update ID that you can use
 *             to track the status of your node group update with the <a>DescribeUpdate</a>
 *             API operation. Currently you can update the Kubernetes labels for a node group or the
 *             scaling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateNodegroupConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateNodegroupConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateNodegroupConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNodegroupConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateNodegroupConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateNodegroupConfigCommand extends smithy_client_1.Command {
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
        const clientName = "EKSClient";
        const commandName = "UpdateNodegroupConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateNodegroupConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateNodegroupConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateNodegroupConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateNodegroupConfigCommand(output, context);
    }
}
exports.UpdateNodegroupConfigCommand = UpdateNodegroupConfigCommand;
//# sourceMappingURL=UpdateNodegroupConfigCommand.js.map