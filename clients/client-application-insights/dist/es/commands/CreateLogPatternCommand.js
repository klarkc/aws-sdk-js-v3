import { __extends } from "tslib";
import { CreateLogPatternRequest, CreateLogPatternResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLogPatternCommand,
  serializeAws_json1_1CreateLogPatternCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an log pattern to a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, CreateLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, CreateLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new CreateLogPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLogPatternCommandInput} for command's `input` shape.
 * @see {@link CreateLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLogPatternCommand = /** @class */ (function (_super) {
  __extends(CreateLogPatternCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateLogPatternCommand(input) {
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
  CreateLogPatternCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "CreateLogPatternCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateLogPatternRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLogPatternResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateLogPatternCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateLogPatternCommand(input, context);
  };
  CreateLogPatternCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateLogPatternCommand(output, context);
  };
  return CreateLogPatternCommand;
})($Command);
export { CreateLogPatternCommand };
//# sourceMappingURL=CreateLogPatternCommand.js.map
