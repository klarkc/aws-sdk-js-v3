import { __extends } from "tslib";
import { CreateEnvironmentEC2Request, CreateEnvironmentEC2Result } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEnvironmentEC2Command,
  serializeAws_json1_1CreateEnvironmentEC2Command,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, CreateEnvironmentEC2Command } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, CreateEnvironmentEC2Command } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new CreateEnvironmentEC2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentEC2CommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentEC2CommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEnvironmentEC2Command = /** @class */ (function (_super) {
  __extends(CreateEnvironmentEC2Command, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateEnvironmentEC2Command(input) {
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
  CreateEnvironmentEC2Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "CreateEnvironmentEC2Command";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateEnvironmentEC2Request.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentEC2Result.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateEnvironmentEC2Command.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateEnvironmentEC2Command(input, context);
  };
  CreateEnvironmentEC2Command.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateEnvironmentEC2Command(output, context);
  };
  return CreateEnvironmentEC2Command;
})($Command);
export { CreateEnvironmentEC2Command };
//# sourceMappingURL=CreateEnvironmentEC2Command.js.map
