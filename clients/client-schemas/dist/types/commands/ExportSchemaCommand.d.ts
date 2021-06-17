import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { ExportSchemaRequest, ExportSchemaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportSchemaCommandInput extends ExportSchemaRequest {
}
export interface ExportSchemaCommandOutput extends ExportSchemaResponse, __MetadataBearer {
}
export declare class ExportSchemaCommand extends $Command<ExportSchemaCommandInput, ExportSchemaCommandOutput, SchemasClientResolvedConfig> {
    readonly input: ExportSchemaCommandInput;
    constructor(input: ExportSchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportSchemaCommandInput, ExportSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
