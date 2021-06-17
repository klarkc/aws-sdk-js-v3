"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateInstanceStorageConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a storage resource type for the first time. You can only associate one type of
 *    storage configuration in a single call. This means, for example, that you can't define an
 *    instance with multiple S3 buckets for storing chat transcripts.</p>
 *          <p>This API does not create a resource that doesn't exist. It only associates it to the
 *    instance. Ensure that the resource being specified in the storage configuration, like an S3
 *    bucket, exists when being used for association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateInstanceStorageConfigCommand extends smithy_client_1.Command {
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
        const clientName = "ConnectClient";
        const commandName = "AssociateInstanceStorageConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateInstanceStorageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateInstanceStorageConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1AssociateInstanceStorageConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1AssociateInstanceStorageConfigCommand(output, context);
    }
}
exports.AssociateInstanceStorageConfigCommand = AssociateInstanceStorageConfigCommand;
//# sourceMappingURL=AssociateInstanceStorageConfigCommand.js.map