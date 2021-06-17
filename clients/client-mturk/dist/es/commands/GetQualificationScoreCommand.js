import { __extends } from "tslib";
import { GetQualificationScoreRequest, GetQualificationScoreResponse } from "../models/models_0";
import { deserializeAws_json1_1GetQualificationScoreCommand, serializeAws_json1_1GetQualificationScoreCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>GetQualificationScore</code>
 *             operation returns the value of a Worker's Qualification for a given
 *             Qualification type.
 *         </p>
 *         <p>
 *             To get a Worker's Qualification, you must know the Worker's ID. The
 *             Worker's ID is included in the assignment data returned by the
 *             <code>ListAssignmentsForHIT</code>
 *             operation.
 *         </p>
 *         <p>Only the owner of a Qualification type can query the value of
 *             a Worker's Qualification of that type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationScoreCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationScoreCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetQualificationScoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQualificationScoreCommandInput} for command's `input` shape.
 * @see {@link GetQualificationScoreCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQualificationScoreCommand = /** @class */ (function (_super) {
    __extends(GetQualificationScoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetQualificationScoreCommand(input) {
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
    GetQualificationScoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "GetQualificationScoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetQualificationScoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetQualificationScoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetQualificationScoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetQualificationScoreCommand(input, context);
    };
    GetQualificationScoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetQualificationScoreCommand(output, context);
    };
    return GetQualificationScoreCommand;
}($Command));
export { GetQualificationScoreCommand };
//# sourceMappingURL=GetQualificationScoreCommand.js.map