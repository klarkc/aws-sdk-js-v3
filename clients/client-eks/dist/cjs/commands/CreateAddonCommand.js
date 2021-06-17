"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddonCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an Amazon EKS add-on.</p>
 *         <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common
 *             operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS
 *             clusters running version 1.18 with platform version <code>eks.3</code> or later because
 *             add-ons rely on the Server-side Apply Kubernetes feature, which is only available in
 *             Kubernetes 1.18 and later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAddonCommandInput} for command's `input` shape.
 * @see {@link CreateAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateAddonCommand extends smithy_client_1.Command {
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
        const commandName = "CreateAddonCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAddonRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAddonResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateAddonCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateAddonCommand(output, context);
    }
}
exports.CreateAddonCommand = CreateAddonCommand;
//# sourceMappingURL=CreateAddonCommand.js.map