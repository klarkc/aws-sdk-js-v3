import { __extends } from "tslib";
import { DescribeCustomDomainsRequest, DescribeCustomDomainsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeCustomDomainsCommand,
  serializeAws_json1_0DescribeCustomDomainsCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Return a description of custom domain names that are associated with an AWS App Runner service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeCustomDomainsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeCustomDomainsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeCustomDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomDomainsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCustomDomainsCommand = /** @class */ (function (_super) {
  __extends(DescribeCustomDomainsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeCustomDomainsCommand(input) {
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
  DescribeCustomDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "DescribeCustomDomainsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeCustomDomainsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomDomainsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeCustomDomainsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0DescribeCustomDomainsCommand(input, context);
  };
  DescribeCustomDomainsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0DescribeCustomDomainsCommand(output, context);
  };
  return DescribeCustomDomainsCommand;
})($Command);
export { DescribeCustomDomainsCommand };
//# sourceMappingURL=DescribeCustomDomainsCommand.js.map
