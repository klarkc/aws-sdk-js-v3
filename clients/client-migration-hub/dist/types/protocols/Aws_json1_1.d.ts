import { AssociateCreatedArtifactCommandInput, AssociateCreatedArtifactCommandOutput } from "../commands/AssociateCreatedArtifactCommand";
import { AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput } from "../commands/AssociateDiscoveredResourceCommand";
import { CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput } from "../commands/CreateProgressUpdateStreamCommand";
import { DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput } from "../commands/DeleteProgressUpdateStreamCommand";
import { DescribeApplicationStateCommandInput, DescribeApplicationStateCommandOutput } from "../commands/DescribeApplicationStateCommand";
import { DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput } from "../commands/DescribeMigrationTaskCommand";
import { DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput } from "../commands/DisassociateCreatedArtifactCommand";
import { DisassociateDiscoveredResourceCommandInput, DisassociateDiscoveredResourceCommandOutput } from "../commands/DisassociateDiscoveredResourceCommand";
import { ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput } from "../commands/ImportMigrationTaskCommand";
import { ListApplicationStatesCommandInput, ListApplicationStatesCommandOutput } from "../commands/ListApplicationStatesCommand";
import { ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput } from "../commands/ListCreatedArtifactsCommand";
import { ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput } from "../commands/ListDiscoveredResourcesCommand";
import { ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput } from "../commands/ListMigrationTasksCommand";
import { ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput } from "../commands/ListProgressUpdateStreamsCommand";
import { NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput } from "../commands/NotifyApplicationStateCommand";
import { NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput } from "../commands/NotifyMigrationTaskStateCommand";
import { PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput } from "../commands/PutResourceAttributesCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1AssociateCreatedArtifactCommand: (input: AssociateCreatedArtifactCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1AssociateDiscoveredResourceCommand: (input: AssociateDiscoveredResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateProgressUpdateStreamCommand: (input: CreateProgressUpdateStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteProgressUpdateStreamCommand: (input: DeleteProgressUpdateStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeApplicationStateCommand: (input: DescribeApplicationStateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeMigrationTaskCommand: (input: DescribeMigrationTaskCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateCreatedArtifactCommand: (input: DisassociateCreatedArtifactCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DisassociateDiscoveredResourceCommand: (input: DisassociateDiscoveredResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ImportMigrationTaskCommand: (input: ImportMigrationTaskCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListApplicationStatesCommand: (input: ListApplicationStatesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListCreatedArtifactsCommand: (input: ListCreatedArtifactsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListDiscoveredResourcesCommand: (input: ListDiscoveredResourcesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListMigrationTasksCommand: (input: ListMigrationTasksCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListProgressUpdateStreamsCommand: (input: ListProgressUpdateStreamsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1NotifyApplicationStateCommand: (input: NotifyApplicationStateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1NotifyMigrationTaskStateCommand: (input: NotifyMigrationTaskStateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutResourceAttributesCommand: (input: PutResourceAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1AssociateCreatedArtifactCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateCreatedArtifactCommandOutput>;
export declare const deserializeAws_json1_1AssociateDiscoveredResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateDiscoveredResourceCommandOutput>;
export declare const deserializeAws_json1_1CreateProgressUpdateStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateProgressUpdateStreamCommandOutput>;
export declare const deserializeAws_json1_1DeleteProgressUpdateStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteProgressUpdateStreamCommandOutput>;
export declare const deserializeAws_json1_1DescribeApplicationStateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeApplicationStateCommandOutput>;
export declare const deserializeAws_json1_1DescribeMigrationTaskCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeMigrationTaskCommandOutput>;
export declare const deserializeAws_json1_1DisassociateCreatedArtifactCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateCreatedArtifactCommandOutput>;
export declare const deserializeAws_json1_1DisassociateDiscoveredResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateDiscoveredResourceCommandOutput>;
export declare const deserializeAws_json1_1ImportMigrationTaskCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ImportMigrationTaskCommandOutput>;
export declare const deserializeAws_json1_1ListApplicationStatesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListApplicationStatesCommandOutput>;
export declare const deserializeAws_json1_1ListCreatedArtifactsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListCreatedArtifactsCommandOutput>;
export declare const deserializeAws_json1_1ListDiscoveredResourcesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDiscoveredResourcesCommandOutput>;
export declare const deserializeAws_json1_1ListMigrationTasksCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListMigrationTasksCommandOutput>;
export declare const deserializeAws_json1_1ListProgressUpdateStreamsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListProgressUpdateStreamsCommandOutput>;
export declare const deserializeAws_json1_1NotifyApplicationStateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<NotifyApplicationStateCommandOutput>;
export declare const deserializeAws_json1_1NotifyMigrationTaskStateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<NotifyMigrationTaskStateCommandOutput>;
export declare const deserializeAws_json1_1PutResourceAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutResourceAttributesCommandOutput>;
