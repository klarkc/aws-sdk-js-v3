import { __extends } from "tslib";
import { ValidatePipelineDefinitionInput, ValidatePipelineDefinitionOutput } from "../models/models_0";
import { deserializeAws_json1_1ValidatePipelineDefinitionCommand, serializeAws_json1_1ValidatePipelineDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Validates the specified pipeline definition to ensure that it is well formed and can be run without error.</p>
 *
 *         <examples>
 *             <example>
 *                 <name>Example 1</name>
 *                 <description>
 *                     This example sets an valid pipeline configuration and returns success.
 *                 </description>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ValidatePipelineDefinition
 * Content-Length: 936
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "pipelineObjects":
 *   [
 *     {"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         {"key": "workerGroup",
 *          "stringValue": "MyworkerGroup"}
 *       ]
 *     },
 *     {"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        {"key": "startDateTime",
 *          "stringValue": "2012-09-25T17:00:00"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"}
 *       ]
 *     },
 *     {"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         {"key": "type",
 *          "stringValue": "ShellCommandActivity"},
 *         {"key": "command",
 *          "stringValue": "echo hello"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "schedule",
 *          "refValue": "Schedule"}
 *
 *       ]
 *     }
 *   ]
 * }
 *
 *             </request>
 *             <response>
 *
 * x-amzn-RequestId: 92c9f347-0776-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 18
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"errored": false}
 *
 *             </response>
 *             </example>
 *             <example>
 *              <name>Example 2</name>
 *             <description>
 *                 This example sets an invalid pipeline configuration and returns the associated set of validation errors.
 *             </description>
 *
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ValidatePipelineDefinition
 * Content-Length: 903
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "pipelineObjects":
 *   [
 *     {"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         {"key": "workerGroup",
 *          "stringValue": "MyworkerGroup"}
 *       ]
 *     },
 *     {"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        {"key": "startDateTime",
 *          "stringValue": "bad-time"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"}
 *       ]
 *     },
 *     {"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         {"key": "type",
 *          "stringValue": "ShellCommandActivity"},
 *         {"key": "command",
 *          "stringValue": "echo hello"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "schedule",
 *          "refValue": "Schedule"}
 *
 *       ]
 *     }
 *   ]
 * }
 *
 *             </request>
 *             <response>
 *
 * x-amzn-RequestId: 496a1f5a-0e6a-11e2-a61c-bd6312c92ddd
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 278
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"errored": true,
 *  "validationErrors":
 *   [
 *     {"errors":
 *       ["INVALID_FIELD_VALUE:  'startDateTime' value must be a literal datetime value."],
 *      "id": "Schedule"}
 *   ]
 * }
 *
 *             </response>
 *                 </example>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ValidatePipelineDefinitionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ValidatePipelineDefinitionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new ValidatePipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidatePipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link ValidatePipelineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ValidatePipelineDefinitionCommand = /** @class */ (function (_super) {
    __extends(ValidatePipelineDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ValidatePipelineDefinitionCommand(input) {
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
    ValidatePipelineDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataPipelineClient";
        var commandName = "ValidatePipelineDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ValidatePipelineDefinitionInput.filterSensitiveLog,
            outputFilterSensitiveLog: ValidatePipelineDefinitionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ValidatePipelineDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ValidatePipelineDefinitionCommand(input, context);
    };
    ValidatePipelineDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ValidatePipelineDefinitionCommand(output, context);
    };
    return ValidatePipelineDefinitionCommand;
}($Command));
export { ValidatePipelineDefinitionCommand };
//# sourceMappingURL=ValidatePipelineDefinitionCommand.js.map