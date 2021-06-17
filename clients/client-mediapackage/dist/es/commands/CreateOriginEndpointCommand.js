import { __extends } from "tslib";
import { CreateOriginEndpointRequest, CreateOriginEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateOriginEndpointCommand, serializeAws_restJson1CreateOriginEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a new OriginEndpoint record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new CreateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOriginEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateOriginEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOriginEndpointCommand(input) {
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
    CreateOriginEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "CreateOriginEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOriginEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOriginEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOriginEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateOriginEndpointCommand(input, context);
    };
    CreateOriginEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateOriginEndpointCommand(output, context);
    };
    return CreateOriginEndpointCommand;
}($Command));
export { CreateOriginEndpointCommand };
//# sourceMappingURL=CreateOriginEndpointCommand.js.map