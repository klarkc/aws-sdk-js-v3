import { __extends } from "tslib";
import { CreateCustomMetadataRequest, CreateCustomMetadataResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCustomMetadataCommand, serializeAws_restJson1CreateCustomMetadataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more custom properties to the specified resource (a folder, document,
 *             or version).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateCustomMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateCustomMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomMetadataCommand = /** @class */ (function (_super) {
    __extends(CreateCustomMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomMetadataCommand(input) {
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
    CreateCustomMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "CreateCustomMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCustomMetadataCommand(input, context);
    };
    CreateCustomMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCustomMetadataCommand(output, context);
    };
    return CreateCustomMetadataCommand;
}($Command));
export { CreateCustomMetadataCommand };
//# sourceMappingURL=CreateCustomMetadataCommand.js.map