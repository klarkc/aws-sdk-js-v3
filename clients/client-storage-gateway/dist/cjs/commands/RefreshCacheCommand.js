"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshCacheCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Refreshes the cached inventory of objects for the specified file share. This operation
 *          finds objects in the Amazon S3 bucket that were added, removed, or replaced since the
 *          gateway last listed the bucket's contents and cached the results. This operation does
 *          not import files into the file gateway cache storage. It only updates the cached inventory
 *          to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
 *          supported in the file gateway type. You can subscribe to be notified through an Amazon
 *          CloudWatch event when your <code>RefreshCache</code> operation completes. For more
 *          information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>AWS Storage Gateway
 *             User Guide</i>.</p>
 *
 *          <p>When this API is called, it only initiates the refresh operation. When the API call
 *          completes and returns a success code, it doesn't necessarily mean that the file
 *          refresh has completed. You should use the refresh-complete notification to determine that
 *          the operation has completed before you check for new files on the gateway file share. You
 *          can subscribe to be notified through a CloudWatch event when your <code>RefreshCache</code>
 *          operation completes.</p>
 *
 *          <p>Throttle limit: This API is asynchronous, so the gateway will accept no more than two
 *          refreshes at any time. We recommend using the refresh-complete CloudWatch event
 *          notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>AWS Storage Gateway
 *             User Guide</i>.</p>
 *
 *          <p>If you invoke the RefreshCache API when two requests are already being processed, any
 *          new request will cause an <code>InvalidGatewayRequestException</code> error because too
 *          many requests were sent to the server.</p>
 *
 *
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>AWS Storage Gateway
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RefreshCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RefreshCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RefreshCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshCacheCommandInput} for command's `input` shape.
 * @see {@link RefreshCacheCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RefreshCacheCommand extends smithy_client_1.Command {
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
        const commandName = "RefreshCacheCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RefreshCacheInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RefreshCacheOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RefreshCacheCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RefreshCacheCommand(output, context);
    }
}
exports.RefreshCacheCommand = RefreshCacheCommand;
//# sourceMappingURL=RefreshCacheCommand.js.map