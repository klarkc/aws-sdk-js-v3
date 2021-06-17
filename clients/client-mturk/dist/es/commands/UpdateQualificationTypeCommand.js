import { __extends } from "tslib";
import { UpdateQualificationTypeRequest, UpdateQualificationTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateQualificationTypeCommand, serializeAws_json1_1UpdateQualificationTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>UpdateQualificationType</code>
 *             operation modifies the attributes of an existing Qualification type,
 *             which is represented by a QualificationType data structure. Only the
 *             owner of a Qualification type can modify its attributes.
 *         </p>
 *         <p> Most attributes of a Qualification type can be changed after
 *             the type has been created. However, the Name and Keywords fields
 *             cannot be modified. The RetryDelayInSeconds parameter can be modified
 *             or added to change the delay or to enable retries, but
 *             RetryDelayInSeconds cannot be used to disable retries. </p>
 *         <p> You can use this operation to update the test for a
 *             Qualification type. The test is updated based on the values specified
 *             for the Test, TestDurationInSeconds and AnswerKey parameters. All
 *             three parameters specify the updated test. If you are updating the
 *             test for a type, you must specify the Test and TestDurationInSeconds
 *             parameters. The AnswerKey parameter is optional; omitting it specifies
 *             that the updated test does not have an answer key. </p>
 *         <p> If you omit the Test parameter, the test for the
 *             Qualification type is unchanged. There is no way to remove a test from
 *             a Qualification type that has one. If the type already has a test, you
 *             cannot update it to be AutoGranted. If the Qualification type does not
 *             have a test and one is provided by an update, the type will henceforth
 *             have a test. </p>
 *         <p> If you want to update the test duration or answer key for an
 *             existing test without changing the questions, you must specify a Test
 *             parameter with the original questions, along with the updated values. </p>
 *         <p> If you provide an updated Test but no AnswerKey, the new test
 *             will not have an answer key. Requests for such Qualifications must be
 *             granted manually. </p>
 *         <p> You can also update the AutoGranted and AutoGrantedValue
 *             attributes of the Qualification type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQualificationTypeCommand = /** @class */ (function (_super) {
    __extends(UpdateQualificationTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQualificationTypeCommand(input) {
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
    UpdateQualificationTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "UpdateQualificationTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQualificationTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateQualificationTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQualificationTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateQualificationTypeCommand(input, context);
    };
    UpdateQualificationTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateQualificationTypeCommand(output, context);
    };
    return UpdateQualificationTypeCommand;
}($Command));
export { UpdateQualificationTypeCommand };
//# sourceMappingURL=UpdateQualificationTypeCommand.js.map