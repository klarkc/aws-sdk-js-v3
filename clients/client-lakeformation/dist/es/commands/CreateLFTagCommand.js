import { __extends } from "tslib";
import { CreateLFTagRequest, CreateLFTagResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLFTagCommand, serializeAws_json1_1CreateLFTagCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a tag with the specified name and values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new CreateLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLFTagCommandInput} for command's `input` shape.
 * @see {@link CreateLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLFTagCommand = /** @class */ (function (_super) {
    __extends(CreateLFTagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLFTagCommand(input) {
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
    CreateLFTagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "CreateLFTagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLFTagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLFTagResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLFTagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLFTagCommand(input, context);
    };
    CreateLFTagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLFTagCommand(output, context);
    };
    return CreateLFTagCommand;
}($Command));
export { CreateLFTagCommand };
//# sourceMappingURL=CreateLFTagCommand.js.map