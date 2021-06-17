import { __extends } from "tslib";
import { CreateContainerInput, CreateContainerOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateContainerCommand, serializeAws_json1_1CreateContainerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a storage container to hold objects. A container is similar to a bucket in
 *          the Amazon S3 service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, CreateContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, CreateContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new CreateContainerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerCommandInput} for command's `input` shape.
 * @see {@link CreateContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContainerCommand = /** @class */ (function (_super) {
    __extends(CreateContainerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContainerCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateContainerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "CreateContainerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContainerInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContainerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContainerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateContainerCommand(input, context);
    };
    CreateContainerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateContainerCommand(output, context);
    };
    return CreateContainerCommand;
}($Command));
export { CreateContainerCommand };
//# sourceMappingURL=CreateContainerCommand.js.map