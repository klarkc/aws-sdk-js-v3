import { __extends } from "tslib";
import { CreateUploadUrlRequest, CreateUploadUrlResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateUploadUrlCommand, serializeAws_restJson1CreateUploadUrlCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a pre-signed S3 write URL that you use to upload the zip
 *          archive when importing a bot or a bot locale. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateUploadUrlCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateUploadUrlCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateUploadUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUploadUrlCommandInput} for command's `input` shape.
 * @see {@link CreateUploadUrlCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUploadUrlCommand = /** @class */ (function (_super) {
    __extends(CreateUploadUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUploadUrlCommand(input) {
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
    CreateUploadUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateUploadUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUploadUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUploadUrlResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUploadUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateUploadUrlCommand(input, context);
    };
    CreateUploadUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateUploadUrlCommand(output, context);
    };
    return CreateUploadUrlCommand;
}($Command));
export { CreateUploadUrlCommand };
//# sourceMappingURL=CreateUploadUrlCommand.js.map