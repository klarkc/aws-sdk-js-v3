import { __extends } from "tslib";
import { CreateQualificationTypeRequest, CreateQualificationTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateQualificationTypeCommand, serializeAws_json1_1CreateQualificationTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>CreateQualificationType</code>
 *             operation creates a new Qualification type, which is represented by a
 *             <code>QualificationType</code>
 *             data structure.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link CreateQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateQualificationTypeCommand = /** @class */ (function (_super) {
    __extends(CreateQualificationTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateQualificationTypeCommand(input) {
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
    CreateQualificationTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "CreateQualificationTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateQualificationTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateQualificationTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateQualificationTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateQualificationTypeCommand(input, context);
    };
    CreateQualificationTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateQualificationTypeCommand(output, context);
    };
    return CreateQualificationTypeCommand;
}($Command));
export { CreateQualificationTypeCommand };
//# sourceMappingURL=CreateQualificationTypeCommand.js.map